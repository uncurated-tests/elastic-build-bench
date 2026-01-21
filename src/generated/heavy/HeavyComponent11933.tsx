'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11933<T> = T extends (infer U)[]
  ? DeepReadonlyArray11933<U>
  : T extends object
  ? DeepReadonlyObject11933<T>
  : T;

interface DeepReadonlyArray11933<T> extends ReadonlyArray<DeepReadonly11933<T>> {}

type DeepReadonlyObject11933<T> = {
  readonly [P in keyof T]: DeepReadonly11933<T[P]>;
};

type UnionToIntersection11933<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11933<T> = UnionToIntersection11933<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11933<T extends unknown[], V> = [...T, V];

type TuplifyUnion11933<T, L = LastOf11933<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11933<TuplifyUnion11933<Exclude<T, L>>, L>;

type DeepPartial11933<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11933<T[P]> }
  : T;

type Paths11933<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11933<K, Paths11933<T[K], Prev11933[D]>> : never }[keyof T]
  : never;

type Prev11933 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11933<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11933 {
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

type ConfigPaths11933 = Paths11933<NestedConfig11933>;

interface HeavyProps11933 {
  config: DeepPartial11933<NestedConfig11933>;
  path?: ConfigPaths11933;
}

const HeavyComponent11933 = memo(function HeavyComponent11933({ config }: HeavyProps11933) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11933) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11933 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11933: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11933.displayName = 'HeavyComponent11933';
export default HeavyComponent11933;
