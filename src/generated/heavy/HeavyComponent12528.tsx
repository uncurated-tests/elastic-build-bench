'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12528<T> = T extends (infer U)[]
  ? DeepReadonlyArray12528<U>
  : T extends object
  ? DeepReadonlyObject12528<T>
  : T;

interface DeepReadonlyArray12528<T> extends ReadonlyArray<DeepReadonly12528<T>> {}

type DeepReadonlyObject12528<T> = {
  readonly [P in keyof T]: DeepReadonly12528<T[P]>;
};

type UnionToIntersection12528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12528<T> = UnionToIntersection12528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12528<T extends unknown[], V> = [...T, V];

type TuplifyUnion12528<T, L = LastOf12528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12528<TuplifyUnion12528<Exclude<T, L>>, L>;

type DeepPartial12528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12528<T[P]> }
  : T;

type Paths12528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12528<K, Paths12528<T[K], Prev12528[D]>> : never }[keyof T]
  : never;

type Prev12528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12528 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths12528 = Paths12528<NestedConfig12528>;

interface HeavyProps12528 {
  config: DeepPartial12528<NestedConfig12528>;
  path?: ConfigPaths12528;
}

const HeavyComponent12528 = memo(function HeavyComponent12528({ config }: HeavyProps12528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12528.displayName = 'HeavyComponent12528';
export default HeavyComponent12528;
