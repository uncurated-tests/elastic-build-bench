'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11395<T> = T extends (infer U)[]
  ? DeepReadonlyArray11395<U>
  : T extends object
  ? DeepReadonlyObject11395<T>
  : T;

interface DeepReadonlyArray11395<T> extends ReadonlyArray<DeepReadonly11395<T>> {}

type DeepReadonlyObject11395<T> = {
  readonly [P in keyof T]: DeepReadonly11395<T[P]>;
};

type UnionToIntersection11395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11395<T> = UnionToIntersection11395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11395<T extends unknown[], V> = [...T, V];

type TuplifyUnion11395<T, L = LastOf11395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11395<TuplifyUnion11395<Exclude<T, L>>, L>;

type DeepPartial11395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11395<T[P]> }
  : T;

type Paths11395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11395<K, Paths11395<T[K], Prev11395[D]>> : never }[keyof T]
  : never;

type Prev11395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11395 {
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

type ConfigPaths11395 = Paths11395<NestedConfig11395>;

interface HeavyProps11395 {
  config: DeepPartial11395<NestedConfig11395>;
  path?: ConfigPaths11395;
}

const HeavyComponent11395 = memo(function HeavyComponent11395({ config }: HeavyProps11395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11395.displayName = 'HeavyComponent11395';
export default HeavyComponent11395;
