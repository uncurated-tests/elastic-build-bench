'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11030<T> = T extends (infer U)[]
  ? DeepReadonlyArray11030<U>
  : T extends object
  ? DeepReadonlyObject11030<T>
  : T;

interface DeepReadonlyArray11030<T> extends ReadonlyArray<DeepReadonly11030<T>> {}

type DeepReadonlyObject11030<T> = {
  readonly [P in keyof T]: DeepReadonly11030<T[P]>;
};

type UnionToIntersection11030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11030<T> = UnionToIntersection11030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11030<T extends unknown[], V> = [...T, V];

type TuplifyUnion11030<T, L = LastOf11030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11030<TuplifyUnion11030<Exclude<T, L>>, L>;

type DeepPartial11030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11030<T[P]> }
  : T;

type Paths11030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11030<K, Paths11030<T[K], Prev11030[D]>> : never }[keyof T]
  : never;

type Prev11030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11030 {
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

type ConfigPaths11030 = Paths11030<NestedConfig11030>;

interface HeavyProps11030 {
  config: DeepPartial11030<NestedConfig11030>;
  path?: ConfigPaths11030;
}

const HeavyComponent11030 = memo(function HeavyComponent11030({ config }: HeavyProps11030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11030.displayName = 'HeavyComponent11030';
export default HeavyComponent11030;
