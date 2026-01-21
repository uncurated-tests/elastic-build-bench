'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11168<T> = T extends (infer U)[]
  ? DeepReadonlyArray11168<U>
  : T extends object
  ? DeepReadonlyObject11168<T>
  : T;

interface DeepReadonlyArray11168<T> extends ReadonlyArray<DeepReadonly11168<T>> {}

type DeepReadonlyObject11168<T> = {
  readonly [P in keyof T]: DeepReadonly11168<T[P]>;
};

type UnionToIntersection11168<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11168<T> = UnionToIntersection11168<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11168<T extends unknown[], V> = [...T, V];

type TuplifyUnion11168<T, L = LastOf11168<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11168<TuplifyUnion11168<Exclude<T, L>>, L>;

type DeepPartial11168<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11168<T[P]> }
  : T;

type Paths11168<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11168<K, Paths11168<T[K], Prev11168[D]>> : never }[keyof T]
  : never;

type Prev11168 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11168<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11168 {
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

type ConfigPaths11168 = Paths11168<NestedConfig11168>;

interface HeavyProps11168 {
  config: DeepPartial11168<NestedConfig11168>;
  path?: ConfigPaths11168;
}

const HeavyComponent11168 = memo(function HeavyComponent11168({ config }: HeavyProps11168) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11168) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11168 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11168: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11168.displayName = 'HeavyComponent11168';
export default HeavyComponent11168;
