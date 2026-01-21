'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11016<T> = T extends (infer U)[]
  ? DeepReadonlyArray11016<U>
  : T extends object
  ? DeepReadonlyObject11016<T>
  : T;

interface DeepReadonlyArray11016<T> extends ReadonlyArray<DeepReadonly11016<T>> {}

type DeepReadonlyObject11016<T> = {
  readonly [P in keyof T]: DeepReadonly11016<T[P]>;
};

type UnionToIntersection11016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11016<T> = UnionToIntersection11016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11016<T extends unknown[], V> = [...T, V];

type TuplifyUnion11016<T, L = LastOf11016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11016<TuplifyUnion11016<Exclude<T, L>>, L>;

type DeepPartial11016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11016<T[P]> }
  : T;

type Paths11016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11016<K, Paths11016<T[K], Prev11016[D]>> : never }[keyof T]
  : never;

type Prev11016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11016 {
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

type ConfigPaths11016 = Paths11016<NestedConfig11016>;

interface HeavyProps11016 {
  config: DeepPartial11016<NestedConfig11016>;
  path?: ConfigPaths11016;
}

const HeavyComponent11016 = memo(function HeavyComponent11016({ config }: HeavyProps11016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11016.displayName = 'HeavyComponent11016';
export default HeavyComponent11016;
