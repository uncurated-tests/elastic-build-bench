'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11142<T> = T extends (infer U)[]
  ? DeepReadonlyArray11142<U>
  : T extends object
  ? DeepReadonlyObject11142<T>
  : T;

interface DeepReadonlyArray11142<T> extends ReadonlyArray<DeepReadonly11142<T>> {}

type DeepReadonlyObject11142<T> = {
  readonly [P in keyof T]: DeepReadonly11142<T[P]>;
};

type UnionToIntersection11142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11142<T> = UnionToIntersection11142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11142<T extends unknown[], V> = [...T, V];

type TuplifyUnion11142<T, L = LastOf11142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11142<TuplifyUnion11142<Exclude<T, L>>, L>;

type DeepPartial11142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11142<T[P]> }
  : T;

type Paths11142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11142<K, Paths11142<T[K], Prev11142[D]>> : never }[keyof T]
  : never;

type Prev11142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11142 {
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

type ConfigPaths11142 = Paths11142<NestedConfig11142>;

interface HeavyProps11142 {
  config: DeepPartial11142<NestedConfig11142>;
  path?: ConfigPaths11142;
}

const HeavyComponent11142 = memo(function HeavyComponent11142({ config }: HeavyProps11142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11142.displayName = 'HeavyComponent11142';
export default HeavyComponent11142;
