'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11095<T> = T extends (infer U)[]
  ? DeepReadonlyArray11095<U>
  : T extends object
  ? DeepReadonlyObject11095<T>
  : T;

interface DeepReadonlyArray11095<T> extends ReadonlyArray<DeepReadonly11095<T>> {}

type DeepReadonlyObject11095<T> = {
  readonly [P in keyof T]: DeepReadonly11095<T[P]>;
};

type UnionToIntersection11095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11095<T> = UnionToIntersection11095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11095<T extends unknown[], V> = [...T, V];

type TuplifyUnion11095<T, L = LastOf11095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11095<TuplifyUnion11095<Exclude<T, L>>, L>;

type DeepPartial11095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11095<T[P]> }
  : T;

type Paths11095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11095<K, Paths11095<T[K], Prev11095[D]>> : never }[keyof T]
  : never;

type Prev11095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11095 {
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

type ConfigPaths11095 = Paths11095<NestedConfig11095>;

interface HeavyProps11095 {
  config: DeepPartial11095<NestedConfig11095>;
  path?: ConfigPaths11095;
}

const HeavyComponent11095 = memo(function HeavyComponent11095({ config }: HeavyProps11095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11095.displayName = 'HeavyComponent11095';
export default HeavyComponent11095;
