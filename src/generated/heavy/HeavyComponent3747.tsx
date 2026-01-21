'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3747<T> = T extends (infer U)[]
  ? DeepReadonlyArray3747<U>
  : T extends object
  ? DeepReadonlyObject3747<T>
  : T;

interface DeepReadonlyArray3747<T> extends ReadonlyArray<DeepReadonly3747<T>> {}

type DeepReadonlyObject3747<T> = {
  readonly [P in keyof T]: DeepReadonly3747<T[P]>;
};

type UnionToIntersection3747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3747<T> = UnionToIntersection3747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3747<T extends unknown[], V> = [...T, V];

type TuplifyUnion3747<T, L = LastOf3747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3747<TuplifyUnion3747<Exclude<T, L>>, L>;

type DeepPartial3747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3747<T[P]> }
  : T;

type Paths3747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3747<K, Paths3747<T[K], Prev3747[D]>> : never }[keyof T]
  : never;

type Prev3747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3747 {
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

type ConfigPaths3747 = Paths3747<NestedConfig3747>;

interface HeavyProps3747 {
  config: DeepPartial3747<NestedConfig3747>;
  path?: ConfigPaths3747;
}

const HeavyComponent3747 = memo(function HeavyComponent3747({ config }: HeavyProps3747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3747.displayName = 'HeavyComponent3747';
export default HeavyComponent3747;
