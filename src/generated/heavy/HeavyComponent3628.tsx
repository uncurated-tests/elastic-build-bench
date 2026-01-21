'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3628<T> = T extends (infer U)[]
  ? DeepReadonlyArray3628<U>
  : T extends object
  ? DeepReadonlyObject3628<T>
  : T;

interface DeepReadonlyArray3628<T> extends ReadonlyArray<DeepReadonly3628<T>> {}

type DeepReadonlyObject3628<T> = {
  readonly [P in keyof T]: DeepReadonly3628<T[P]>;
};

type UnionToIntersection3628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3628<T> = UnionToIntersection3628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3628<T extends unknown[], V> = [...T, V];

type TuplifyUnion3628<T, L = LastOf3628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3628<TuplifyUnion3628<Exclude<T, L>>, L>;

type DeepPartial3628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3628<T[P]> }
  : T;

type Paths3628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3628<K, Paths3628<T[K], Prev3628[D]>> : never }[keyof T]
  : never;

type Prev3628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3628 {
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

type ConfigPaths3628 = Paths3628<NestedConfig3628>;

interface HeavyProps3628 {
  config: DeepPartial3628<NestedConfig3628>;
  path?: ConfigPaths3628;
}

const HeavyComponent3628 = memo(function HeavyComponent3628({ config }: HeavyProps3628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3628.displayName = 'HeavyComponent3628';
export default HeavyComponent3628;
