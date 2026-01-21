'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11066<T> = T extends (infer U)[]
  ? DeepReadonlyArray11066<U>
  : T extends object
  ? DeepReadonlyObject11066<T>
  : T;

interface DeepReadonlyArray11066<T> extends ReadonlyArray<DeepReadonly11066<T>> {}

type DeepReadonlyObject11066<T> = {
  readonly [P in keyof T]: DeepReadonly11066<T[P]>;
};

type UnionToIntersection11066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11066<T> = UnionToIntersection11066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11066<T extends unknown[], V> = [...T, V];

type TuplifyUnion11066<T, L = LastOf11066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11066<TuplifyUnion11066<Exclude<T, L>>, L>;

type DeepPartial11066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11066<T[P]> }
  : T;

type Paths11066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11066<K, Paths11066<T[K], Prev11066[D]>> : never }[keyof T]
  : never;

type Prev11066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11066 {
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

type ConfigPaths11066 = Paths11066<NestedConfig11066>;

interface HeavyProps11066 {
  config: DeepPartial11066<NestedConfig11066>;
  path?: ConfigPaths11066;
}

const HeavyComponent11066 = memo(function HeavyComponent11066({ config }: HeavyProps11066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11066.displayName = 'HeavyComponent11066';
export default HeavyComponent11066;
