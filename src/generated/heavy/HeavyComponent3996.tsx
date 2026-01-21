'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3996<T> = T extends (infer U)[]
  ? DeepReadonlyArray3996<U>
  : T extends object
  ? DeepReadonlyObject3996<T>
  : T;

interface DeepReadonlyArray3996<T> extends ReadonlyArray<DeepReadonly3996<T>> {}

type DeepReadonlyObject3996<T> = {
  readonly [P in keyof T]: DeepReadonly3996<T[P]>;
};

type UnionToIntersection3996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3996<T> = UnionToIntersection3996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3996<T extends unknown[], V> = [...T, V];

type TuplifyUnion3996<T, L = LastOf3996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3996<TuplifyUnion3996<Exclude<T, L>>, L>;

type DeepPartial3996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3996<T[P]> }
  : T;

type Paths3996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3996<K, Paths3996<T[K], Prev3996[D]>> : never }[keyof T]
  : never;

type Prev3996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3996 {
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

type ConfigPaths3996 = Paths3996<NestedConfig3996>;

interface HeavyProps3996 {
  config: DeepPartial3996<NestedConfig3996>;
  path?: ConfigPaths3996;
}

const HeavyComponent3996 = memo(function HeavyComponent3996({ config }: HeavyProps3996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3996.displayName = 'HeavyComponent3996';
export default HeavyComponent3996;
