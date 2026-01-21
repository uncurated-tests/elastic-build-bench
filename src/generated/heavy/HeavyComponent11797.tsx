'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11797<T> = T extends (infer U)[]
  ? DeepReadonlyArray11797<U>
  : T extends object
  ? DeepReadonlyObject11797<T>
  : T;

interface DeepReadonlyArray11797<T> extends ReadonlyArray<DeepReadonly11797<T>> {}

type DeepReadonlyObject11797<T> = {
  readonly [P in keyof T]: DeepReadonly11797<T[P]>;
};

type UnionToIntersection11797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11797<T> = UnionToIntersection11797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11797<T extends unknown[], V> = [...T, V];

type TuplifyUnion11797<T, L = LastOf11797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11797<TuplifyUnion11797<Exclude<T, L>>, L>;

type DeepPartial11797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11797<T[P]> }
  : T;

type Paths11797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11797<K, Paths11797<T[K], Prev11797[D]>> : never }[keyof T]
  : never;

type Prev11797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11797 {
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

type ConfigPaths11797 = Paths11797<NestedConfig11797>;

interface HeavyProps11797 {
  config: DeepPartial11797<NestedConfig11797>;
  path?: ConfigPaths11797;
}

const HeavyComponent11797 = memo(function HeavyComponent11797({ config }: HeavyProps11797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11797.displayName = 'HeavyComponent11797';
export default HeavyComponent11797;
