'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3711<T> = T extends (infer U)[]
  ? DeepReadonlyArray3711<U>
  : T extends object
  ? DeepReadonlyObject3711<T>
  : T;

interface DeepReadonlyArray3711<T> extends ReadonlyArray<DeepReadonly3711<T>> {}

type DeepReadonlyObject3711<T> = {
  readonly [P in keyof T]: DeepReadonly3711<T[P]>;
};

type UnionToIntersection3711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3711<T> = UnionToIntersection3711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3711<T extends unknown[], V> = [...T, V];

type TuplifyUnion3711<T, L = LastOf3711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3711<TuplifyUnion3711<Exclude<T, L>>, L>;

type DeepPartial3711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3711<T[P]> }
  : T;

type Paths3711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3711<K, Paths3711<T[K], Prev3711[D]>> : never }[keyof T]
  : never;

type Prev3711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3711 {
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

type ConfigPaths3711 = Paths3711<NestedConfig3711>;

interface HeavyProps3711 {
  config: DeepPartial3711<NestedConfig3711>;
  path?: ConfigPaths3711;
}

const HeavyComponent3711 = memo(function HeavyComponent3711({ config }: HeavyProps3711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3711.displayName = 'HeavyComponent3711';
export default HeavyComponent3711;
