'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3981<T> = T extends (infer U)[]
  ? DeepReadonlyArray3981<U>
  : T extends object
  ? DeepReadonlyObject3981<T>
  : T;

interface DeepReadonlyArray3981<T> extends ReadonlyArray<DeepReadonly3981<T>> {}

type DeepReadonlyObject3981<T> = {
  readonly [P in keyof T]: DeepReadonly3981<T[P]>;
};

type UnionToIntersection3981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3981<T> = UnionToIntersection3981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3981<T extends unknown[], V> = [...T, V];

type TuplifyUnion3981<T, L = LastOf3981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3981<TuplifyUnion3981<Exclude<T, L>>, L>;

type DeepPartial3981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3981<T[P]> }
  : T;

type Paths3981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3981<K, Paths3981<T[K], Prev3981[D]>> : never }[keyof T]
  : never;

type Prev3981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3981 {
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

type ConfigPaths3981 = Paths3981<NestedConfig3981>;

interface HeavyProps3981 {
  config: DeepPartial3981<NestedConfig3981>;
  path?: ConfigPaths3981;
}

const HeavyComponent3981 = memo(function HeavyComponent3981({ config }: HeavyProps3981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3981.displayName = 'HeavyComponent3981';
export default HeavyComponent3981;
