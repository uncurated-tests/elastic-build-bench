'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11036<T> = T extends (infer U)[]
  ? DeepReadonlyArray11036<U>
  : T extends object
  ? DeepReadonlyObject11036<T>
  : T;

interface DeepReadonlyArray11036<T> extends ReadonlyArray<DeepReadonly11036<T>> {}

type DeepReadonlyObject11036<T> = {
  readonly [P in keyof T]: DeepReadonly11036<T[P]>;
};

type UnionToIntersection11036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11036<T> = UnionToIntersection11036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11036<T extends unknown[], V> = [...T, V];

type TuplifyUnion11036<T, L = LastOf11036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11036<TuplifyUnion11036<Exclude<T, L>>, L>;

type DeepPartial11036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11036<T[P]> }
  : T;

type Paths11036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11036<K, Paths11036<T[K], Prev11036[D]>> : never }[keyof T]
  : never;

type Prev11036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11036 {
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

type ConfigPaths11036 = Paths11036<NestedConfig11036>;

interface HeavyProps11036 {
  config: DeepPartial11036<NestedConfig11036>;
  path?: ConfigPaths11036;
}

const HeavyComponent11036 = memo(function HeavyComponent11036({ config }: HeavyProps11036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11036.displayName = 'HeavyComponent11036';
export default HeavyComponent11036;
