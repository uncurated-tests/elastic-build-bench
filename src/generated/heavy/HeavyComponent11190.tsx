'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11190<T> = T extends (infer U)[]
  ? DeepReadonlyArray11190<U>
  : T extends object
  ? DeepReadonlyObject11190<T>
  : T;

interface DeepReadonlyArray11190<T> extends ReadonlyArray<DeepReadonly11190<T>> {}

type DeepReadonlyObject11190<T> = {
  readonly [P in keyof T]: DeepReadonly11190<T[P]>;
};

type UnionToIntersection11190<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11190<T> = UnionToIntersection11190<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11190<T extends unknown[], V> = [...T, V];

type TuplifyUnion11190<T, L = LastOf11190<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11190<TuplifyUnion11190<Exclude<T, L>>, L>;

type DeepPartial11190<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11190<T[P]> }
  : T;

type Paths11190<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11190<K, Paths11190<T[K], Prev11190[D]>> : never }[keyof T]
  : never;

type Prev11190 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11190<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11190 {
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

type ConfigPaths11190 = Paths11190<NestedConfig11190>;

interface HeavyProps11190 {
  config: DeepPartial11190<NestedConfig11190>;
  path?: ConfigPaths11190;
}

const HeavyComponent11190 = memo(function HeavyComponent11190({ config }: HeavyProps11190) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11190) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11190 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11190: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11190.displayName = 'HeavyComponent11190';
export default HeavyComponent11190;
