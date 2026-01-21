'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11382<T> = T extends (infer U)[]
  ? DeepReadonlyArray11382<U>
  : T extends object
  ? DeepReadonlyObject11382<T>
  : T;

interface DeepReadonlyArray11382<T> extends ReadonlyArray<DeepReadonly11382<T>> {}

type DeepReadonlyObject11382<T> = {
  readonly [P in keyof T]: DeepReadonly11382<T[P]>;
};

type UnionToIntersection11382<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11382<T> = UnionToIntersection11382<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11382<T extends unknown[], V> = [...T, V];

type TuplifyUnion11382<T, L = LastOf11382<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11382<TuplifyUnion11382<Exclude<T, L>>, L>;

type DeepPartial11382<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11382<T[P]> }
  : T;

type Paths11382<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11382<K, Paths11382<T[K], Prev11382[D]>> : never }[keyof T]
  : never;

type Prev11382 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11382<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11382 {
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

type ConfigPaths11382 = Paths11382<NestedConfig11382>;

interface HeavyProps11382 {
  config: DeepPartial11382<NestedConfig11382>;
  path?: ConfigPaths11382;
}

const HeavyComponent11382 = memo(function HeavyComponent11382({ config }: HeavyProps11382) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11382) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11382 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11382: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11382.displayName = 'HeavyComponent11382';
export default HeavyComponent11382;
