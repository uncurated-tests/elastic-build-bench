'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3749<T> = T extends (infer U)[]
  ? DeepReadonlyArray3749<U>
  : T extends object
  ? DeepReadonlyObject3749<T>
  : T;

interface DeepReadonlyArray3749<T> extends ReadonlyArray<DeepReadonly3749<T>> {}

type DeepReadonlyObject3749<T> = {
  readonly [P in keyof T]: DeepReadonly3749<T[P]>;
};

type UnionToIntersection3749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3749<T> = UnionToIntersection3749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3749<T extends unknown[], V> = [...T, V];

type TuplifyUnion3749<T, L = LastOf3749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3749<TuplifyUnion3749<Exclude<T, L>>, L>;

type DeepPartial3749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3749<T[P]> }
  : T;

type Paths3749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3749<K, Paths3749<T[K], Prev3749[D]>> : never }[keyof T]
  : never;

type Prev3749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3749 {
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

type ConfigPaths3749 = Paths3749<NestedConfig3749>;

interface HeavyProps3749 {
  config: DeepPartial3749<NestedConfig3749>;
  path?: ConfigPaths3749;
}

const HeavyComponent3749 = memo(function HeavyComponent3749({ config }: HeavyProps3749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3749.displayName = 'HeavyComponent3749';
export default HeavyComponent3749;
