'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11488<T> = T extends (infer U)[]
  ? DeepReadonlyArray11488<U>
  : T extends object
  ? DeepReadonlyObject11488<T>
  : T;

interface DeepReadonlyArray11488<T> extends ReadonlyArray<DeepReadonly11488<T>> {}

type DeepReadonlyObject11488<T> = {
  readonly [P in keyof T]: DeepReadonly11488<T[P]>;
};

type UnionToIntersection11488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11488<T> = UnionToIntersection11488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11488<T extends unknown[], V> = [...T, V];

type TuplifyUnion11488<T, L = LastOf11488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11488<TuplifyUnion11488<Exclude<T, L>>, L>;

type DeepPartial11488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11488<T[P]> }
  : T;

type Paths11488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11488<K, Paths11488<T[K], Prev11488[D]>> : never }[keyof T]
  : never;

type Prev11488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11488 {
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

type ConfigPaths11488 = Paths11488<NestedConfig11488>;

interface HeavyProps11488 {
  config: DeepPartial11488<NestedConfig11488>;
  path?: ConfigPaths11488;
}

const HeavyComponent11488 = memo(function HeavyComponent11488({ config }: HeavyProps11488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11488.displayName = 'HeavyComponent11488';
export default HeavyComponent11488;
