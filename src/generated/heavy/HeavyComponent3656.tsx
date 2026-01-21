'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3656<T> = T extends (infer U)[]
  ? DeepReadonlyArray3656<U>
  : T extends object
  ? DeepReadonlyObject3656<T>
  : T;

interface DeepReadonlyArray3656<T> extends ReadonlyArray<DeepReadonly3656<T>> {}

type DeepReadonlyObject3656<T> = {
  readonly [P in keyof T]: DeepReadonly3656<T[P]>;
};

type UnionToIntersection3656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3656<T> = UnionToIntersection3656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3656<T extends unknown[], V> = [...T, V];

type TuplifyUnion3656<T, L = LastOf3656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3656<TuplifyUnion3656<Exclude<T, L>>, L>;

type DeepPartial3656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3656<T[P]> }
  : T;

type Paths3656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3656<K, Paths3656<T[K], Prev3656[D]>> : never }[keyof T]
  : never;

type Prev3656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3656 {
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

type ConfigPaths3656 = Paths3656<NestedConfig3656>;

interface HeavyProps3656 {
  config: DeepPartial3656<NestedConfig3656>;
  path?: ConfigPaths3656;
}

const HeavyComponent3656 = memo(function HeavyComponent3656({ config }: HeavyProps3656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3656.displayName = 'HeavyComponent3656';
export default HeavyComponent3656;
