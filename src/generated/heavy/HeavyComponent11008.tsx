'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11008<T> = T extends (infer U)[]
  ? DeepReadonlyArray11008<U>
  : T extends object
  ? DeepReadonlyObject11008<T>
  : T;

interface DeepReadonlyArray11008<T> extends ReadonlyArray<DeepReadonly11008<T>> {}

type DeepReadonlyObject11008<T> = {
  readonly [P in keyof T]: DeepReadonly11008<T[P]>;
};

type UnionToIntersection11008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11008<T> = UnionToIntersection11008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11008<T extends unknown[], V> = [...T, V];

type TuplifyUnion11008<T, L = LastOf11008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11008<TuplifyUnion11008<Exclude<T, L>>, L>;

type DeepPartial11008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11008<T[P]> }
  : T;

type Paths11008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11008<K, Paths11008<T[K], Prev11008[D]>> : never }[keyof T]
  : never;

type Prev11008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11008 {
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

type ConfigPaths11008 = Paths11008<NestedConfig11008>;

interface HeavyProps11008 {
  config: DeepPartial11008<NestedConfig11008>;
  path?: ConfigPaths11008;
}

const HeavyComponent11008 = memo(function HeavyComponent11008({ config }: HeavyProps11008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11008.displayName = 'HeavyComponent11008';
export default HeavyComponent11008;
