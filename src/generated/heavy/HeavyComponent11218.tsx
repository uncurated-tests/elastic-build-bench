'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11218<T> = T extends (infer U)[]
  ? DeepReadonlyArray11218<U>
  : T extends object
  ? DeepReadonlyObject11218<T>
  : T;

interface DeepReadonlyArray11218<T> extends ReadonlyArray<DeepReadonly11218<T>> {}

type DeepReadonlyObject11218<T> = {
  readonly [P in keyof T]: DeepReadonly11218<T[P]>;
};

type UnionToIntersection11218<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11218<T> = UnionToIntersection11218<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11218<T extends unknown[], V> = [...T, V];

type TuplifyUnion11218<T, L = LastOf11218<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11218<TuplifyUnion11218<Exclude<T, L>>, L>;

type DeepPartial11218<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11218<T[P]> }
  : T;

type Paths11218<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11218<K, Paths11218<T[K], Prev11218[D]>> : never }[keyof T]
  : never;

type Prev11218 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11218<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11218 {
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

type ConfigPaths11218 = Paths11218<NestedConfig11218>;

interface HeavyProps11218 {
  config: DeepPartial11218<NestedConfig11218>;
  path?: ConfigPaths11218;
}

const HeavyComponent11218 = memo(function HeavyComponent11218({ config }: HeavyProps11218) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11218) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11218 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11218: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11218.displayName = 'HeavyComponent11218';
export default HeavyComponent11218;
