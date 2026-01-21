'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11570<T> = T extends (infer U)[]
  ? DeepReadonlyArray11570<U>
  : T extends object
  ? DeepReadonlyObject11570<T>
  : T;

interface DeepReadonlyArray11570<T> extends ReadonlyArray<DeepReadonly11570<T>> {}

type DeepReadonlyObject11570<T> = {
  readonly [P in keyof T]: DeepReadonly11570<T[P]>;
};

type UnionToIntersection11570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11570<T> = UnionToIntersection11570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11570<T extends unknown[], V> = [...T, V];

type TuplifyUnion11570<T, L = LastOf11570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11570<TuplifyUnion11570<Exclude<T, L>>, L>;

type DeepPartial11570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11570<T[P]> }
  : T;

type Paths11570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11570<K, Paths11570<T[K], Prev11570[D]>> : never }[keyof T]
  : never;

type Prev11570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11570 {
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

type ConfigPaths11570 = Paths11570<NestedConfig11570>;

interface HeavyProps11570 {
  config: DeepPartial11570<NestedConfig11570>;
  path?: ConfigPaths11570;
}

const HeavyComponent11570 = memo(function HeavyComponent11570({ config }: HeavyProps11570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11570.displayName = 'HeavyComponent11570';
export default HeavyComponent11570;
