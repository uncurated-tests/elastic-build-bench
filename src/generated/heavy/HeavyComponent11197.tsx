'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11197<T> = T extends (infer U)[]
  ? DeepReadonlyArray11197<U>
  : T extends object
  ? DeepReadonlyObject11197<T>
  : T;

interface DeepReadonlyArray11197<T> extends ReadonlyArray<DeepReadonly11197<T>> {}

type DeepReadonlyObject11197<T> = {
  readonly [P in keyof T]: DeepReadonly11197<T[P]>;
};

type UnionToIntersection11197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11197<T> = UnionToIntersection11197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11197<T extends unknown[], V> = [...T, V];

type TuplifyUnion11197<T, L = LastOf11197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11197<TuplifyUnion11197<Exclude<T, L>>, L>;

type DeepPartial11197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11197<T[P]> }
  : T;

type Paths11197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11197<K, Paths11197<T[K], Prev11197[D]>> : never }[keyof T]
  : never;

type Prev11197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11197 {
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

type ConfigPaths11197 = Paths11197<NestedConfig11197>;

interface HeavyProps11197 {
  config: DeepPartial11197<NestedConfig11197>;
  path?: ConfigPaths11197;
}

const HeavyComponent11197 = memo(function HeavyComponent11197({ config }: HeavyProps11197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11197.displayName = 'HeavyComponent11197';
export default HeavyComponent11197;
