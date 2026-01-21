'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1913<T> = T extends (infer U)[]
  ? DeepReadonlyArray1913<U>
  : T extends object
  ? DeepReadonlyObject1913<T>
  : T;

interface DeepReadonlyArray1913<T> extends ReadonlyArray<DeepReadonly1913<T>> {}

type DeepReadonlyObject1913<T> = {
  readonly [P in keyof T]: DeepReadonly1913<T[P]>;
};

type UnionToIntersection1913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1913<T> = UnionToIntersection1913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1913<T extends unknown[], V> = [...T, V];

type TuplifyUnion1913<T, L = LastOf1913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1913<TuplifyUnion1913<Exclude<T, L>>, L>;

type DeepPartial1913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1913<T[P]> }
  : T;

type Paths1913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1913<K, Paths1913<T[K], Prev1913[D]>> : never }[keyof T]
  : never;

type Prev1913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1913 {
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

type ConfigPaths1913 = Paths1913<NestedConfig1913>;

interface HeavyProps1913 {
  config: DeepPartial1913<NestedConfig1913>;
  path?: ConfigPaths1913;
}

const HeavyComponent1913 = memo(function HeavyComponent1913({ config }: HeavyProps1913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1913.displayName = 'HeavyComponent1913';
export default HeavyComponent1913;
