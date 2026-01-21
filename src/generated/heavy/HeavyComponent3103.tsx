'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3103<T> = T extends (infer U)[]
  ? DeepReadonlyArray3103<U>
  : T extends object
  ? DeepReadonlyObject3103<T>
  : T;

interface DeepReadonlyArray3103<T> extends ReadonlyArray<DeepReadonly3103<T>> {}

type DeepReadonlyObject3103<T> = {
  readonly [P in keyof T]: DeepReadonly3103<T[P]>;
};

type UnionToIntersection3103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3103<T> = UnionToIntersection3103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3103<T extends unknown[], V> = [...T, V];

type TuplifyUnion3103<T, L = LastOf3103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3103<TuplifyUnion3103<Exclude<T, L>>, L>;

type DeepPartial3103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3103<T[P]> }
  : T;

type Paths3103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3103<K, Paths3103<T[K], Prev3103[D]>> : never }[keyof T]
  : never;

type Prev3103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3103 {
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

type ConfigPaths3103 = Paths3103<NestedConfig3103>;

interface HeavyProps3103 {
  config: DeepPartial3103<NestedConfig3103>;
  path?: ConfigPaths3103;
}

const HeavyComponent3103 = memo(function HeavyComponent3103({ config }: HeavyProps3103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3103.displayName = 'HeavyComponent3103';
export default HeavyComponent3103;
