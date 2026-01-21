'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3003<T> = T extends (infer U)[]
  ? DeepReadonlyArray3003<U>
  : T extends object
  ? DeepReadonlyObject3003<T>
  : T;

interface DeepReadonlyArray3003<T> extends ReadonlyArray<DeepReadonly3003<T>> {}

type DeepReadonlyObject3003<T> = {
  readonly [P in keyof T]: DeepReadonly3003<T[P]>;
};

type UnionToIntersection3003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3003<T> = UnionToIntersection3003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3003<T extends unknown[], V> = [...T, V];

type TuplifyUnion3003<T, L = LastOf3003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3003<TuplifyUnion3003<Exclude<T, L>>, L>;

type DeepPartial3003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3003<T[P]> }
  : T;

type Paths3003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3003<K, Paths3003<T[K], Prev3003[D]>> : never }[keyof T]
  : never;

type Prev3003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3003 {
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

type ConfigPaths3003 = Paths3003<NestedConfig3003>;

interface HeavyProps3003 {
  config: DeepPartial3003<NestedConfig3003>;
  path?: ConfigPaths3003;
}

const HeavyComponent3003 = memo(function HeavyComponent3003({ config }: HeavyProps3003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3003.displayName = 'HeavyComponent3003';
export default HeavyComponent3003;
