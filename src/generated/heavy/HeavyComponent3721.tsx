'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3721<T> = T extends (infer U)[]
  ? DeepReadonlyArray3721<U>
  : T extends object
  ? DeepReadonlyObject3721<T>
  : T;

interface DeepReadonlyArray3721<T> extends ReadonlyArray<DeepReadonly3721<T>> {}

type DeepReadonlyObject3721<T> = {
  readonly [P in keyof T]: DeepReadonly3721<T[P]>;
};

type UnionToIntersection3721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3721<T> = UnionToIntersection3721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3721<T extends unknown[], V> = [...T, V];

type TuplifyUnion3721<T, L = LastOf3721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3721<TuplifyUnion3721<Exclude<T, L>>, L>;

type DeepPartial3721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3721<T[P]> }
  : T;

type Paths3721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3721<K, Paths3721<T[K], Prev3721[D]>> : never }[keyof T]
  : never;

type Prev3721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3721 {
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

type ConfigPaths3721 = Paths3721<NestedConfig3721>;

interface HeavyProps3721 {
  config: DeepPartial3721<NestedConfig3721>;
  path?: ConfigPaths3721;
}

const HeavyComponent3721 = memo(function HeavyComponent3721({ config }: HeavyProps3721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3721.displayName = 'HeavyComponent3721';
export default HeavyComponent3721;
