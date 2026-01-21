'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11443<T> = T extends (infer U)[]
  ? DeepReadonlyArray11443<U>
  : T extends object
  ? DeepReadonlyObject11443<T>
  : T;

interface DeepReadonlyArray11443<T> extends ReadonlyArray<DeepReadonly11443<T>> {}

type DeepReadonlyObject11443<T> = {
  readonly [P in keyof T]: DeepReadonly11443<T[P]>;
};

type UnionToIntersection11443<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11443<T> = UnionToIntersection11443<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11443<T extends unknown[], V> = [...T, V];

type TuplifyUnion11443<T, L = LastOf11443<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11443<TuplifyUnion11443<Exclude<T, L>>, L>;

type DeepPartial11443<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11443<T[P]> }
  : T;

type Paths11443<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11443<K, Paths11443<T[K], Prev11443[D]>> : never }[keyof T]
  : never;

type Prev11443 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11443<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11443 {
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

type ConfigPaths11443 = Paths11443<NestedConfig11443>;

interface HeavyProps11443 {
  config: DeepPartial11443<NestedConfig11443>;
  path?: ConfigPaths11443;
}

const HeavyComponent11443 = memo(function HeavyComponent11443({ config }: HeavyProps11443) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11443) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11443 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11443: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11443.displayName = 'HeavyComponent11443';
export default HeavyComponent11443;
