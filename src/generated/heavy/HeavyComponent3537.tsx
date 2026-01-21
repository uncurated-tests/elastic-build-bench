'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3537<T> = T extends (infer U)[]
  ? DeepReadonlyArray3537<U>
  : T extends object
  ? DeepReadonlyObject3537<T>
  : T;

interface DeepReadonlyArray3537<T> extends ReadonlyArray<DeepReadonly3537<T>> {}

type DeepReadonlyObject3537<T> = {
  readonly [P in keyof T]: DeepReadonly3537<T[P]>;
};

type UnionToIntersection3537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3537<T> = UnionToIntersection3537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3537<T extends unknown[], V> = [...T, V];

type TuplifyUnion3537<T, L = LastOf3537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3537<TuplifyUnion3537<Exclude<T, L>>, L>;

type DeepPartial3537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3537<T[P]> }
  : T;

type Paths3537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3537<K, Paths3537<T[K], Prev3537[D]>> : never }[keyof T]
  : never;

type Prev3537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3537 {
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

type ConfigPaths3537 = Paths3537<NestedConfig3537>;

interface HeavyProps3537 {
  config: DeepPartial3537<NestedConfig3537>;
  path?: ConfigPaths3537;
}

const HeavyComponent3537 = memo(function HeavyComponent3537({ config }: HeavyProps3537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3537.displayName = 'HeavyComponent3537';
export default HeavyComponent3537;
