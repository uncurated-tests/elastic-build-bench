'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3340<T> = T extends (infer U)[]
  ? DeepReadonlyArray3340<U>
  : T extends object
  ? DeepReadonlyObject3340<T>
  : T;

interface DeepReadonlyArray3340<T> extends ReadonlyArray<DeepReadonly3340<T>> {}

type DeepReadonlyObject3340<T> = {
  readonly [P in keyof T]: DeepReadonly3340<T[P]>;
};

type UnionToIntersection3340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3340<T> = UnionToIntersection3340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3340<T extends unknown[], V> = [...T, V];

type TuplifyUnion3340<T, L = LastOf3340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3340<TuplifyUnion3340<Exclude<T, L>>, L>;

type DeepPartial3340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3340<T[P]> }
  : T;

type Paths3340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3340<K, Paths3340<T[K], Prev3340[D]>> : never }[keyof T]
  : never;

type Prev3340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3340 {
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

type ConfigPaths3340 = Paths3340<NestedConfig3340>;

interface HeavyProps3340 {
  config: DeepPartial3340<NestedConfig3340>;
  path?: ConfigPaths3340;
}

const HeavyComponent3340 = memo(function HeavyComponent3340({ config }: HeavyProps3340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3340.displayName = 'HeavyComponent3340';
export default HeavyComponent3340;
