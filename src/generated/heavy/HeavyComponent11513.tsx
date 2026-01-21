'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11513<T> = T extends (infer U)[]
  ? DeepReadonlyArray11513<U>
  : T extends object
  ? DeepReadonlyObject11513<T>
  : T;

interface DeepReadonlyArray11513<T> extends ReadonlyArray<DeepReadonly11513<T>> {}

type DeepReadonlyObject11513<T> = {
  readonly [P in keyof T]: DeepReadonly11513<T[P]>;
};

type UnionToIntersection11513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11513<T> = UnionToIntersection11513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11513<T extends unknown[], V> = [...T, V];

type TuplifyUnion11513<T, L = LastOf11513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11513<TuplifyUnion11513<Exclude<T, L>>, L>;

type DeepPartial11513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11513<T[P]> }
  : T;

type Paths11513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11513<K, Paths11513<T[K], Prev11513[D]>> : never }[keyof T]
  : never;

type Prev11513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11513 {
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

type ConfigPaths11513 = Paths11513<NestedConfig11513>;

interface HeavyProps11513 {
  config: DeepPartial11513<NestedConfig11513>;
  path?: ConfigPaths11513;
}

const HeavyComponent11513 = memo(function HeavyComponent11513({ config }: HeavyProps11513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11513.displayName = 'HeavyComponent11513';
export default HeavyComponent11513;
