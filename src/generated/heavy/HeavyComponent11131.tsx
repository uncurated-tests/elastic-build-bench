'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11131<T> = T extends (infer U)[]
  ? DeepReadonlyArray11131<U>
  : T extends object
  ? DeepReadonlyObject11131<T>
  : T;

interface DeepReadonlyArray11131<T> extends ReadonlyArray<DeepReadonly11131<T>> {}

type DeepReadonlyObject11131<T> = {
  readonly [P in keyof T]: DeepReadonly11131<T[P]>;
};

type UnionToIntersection11131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11131<T> = UnionToIntersection11131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11131<T extends unknown[], V> = [...T, V];

type TuplifyUnion11131<T, L = LastOf11131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11131<TuplifyUnion11131<Exclude<T, L>>, L>;

type DeepPartial11131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11131<T[P]> }
  : T;

type Paths11131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11131<K, Paths11131<T[K], Prev11131[D]>> : never }[keyof T]
  : never;

type Prev11131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11131 {
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

type ConfigPaths11131 = Paths11131<NestedConfig11131>;

interface HeavyProps11131 {
  config: DeepPartial11131<NestedConfig11131>;
  path?: ConfigPaths11131;
}

const HeavyComponent11131 = memo(function HeavyComponent11131({ config }: HeavyProps11131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11131.displayName = 'HeavyComponent11131';
export default HeavyComponent11131;
