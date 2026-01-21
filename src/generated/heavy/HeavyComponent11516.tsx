'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11516<T> = T extends (infer U)[]
  ? DeepReadonlyArray11516<U>
  : T extends object
  ? DeepReadonlyObject11516<T>
  : T;

interface DeepReadonlyArray11516<T> extends ReadonlyArray<DeepReadonly11516<T>> {}

type DeepReadonlyObject11516<T> = {
  readonly [P in keyof T]: DeepReadonly11516<T[P]>;
};

type UnionToIntersection11516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11516<T> = UnionToIntersection11516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11516<T extends unknown[], V> = [...T, V];

type TuplifyUnion11516<T, L = LastOf11516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11516<TuplifyUnion11516<Exclude<T, L>>, L>;

type DeepPartial11516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11516<T[P]> }
  : T;

type Paths11516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11516<K, Paths11516<T[K], Prev11516[D]>> : never }[keyof T]
  : never;

type Prev11516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11516 {
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

type ConfigPaths11516 = Paths11516<NestedConfig11516>;

interface HeavyProps11516 {
  config: DeepPartial11516<NestedConfig11516>;
  path?: ConfigPaths11516;
}

const HeavyComponent11516 = memo(function HeavyComponent11516({ config }: HeavyProps11516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11516.displayName = 'HeavyComponent11516';
export default HeavyComponent11516;
