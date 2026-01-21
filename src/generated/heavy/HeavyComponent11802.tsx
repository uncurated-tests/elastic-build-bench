'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11802<T> = T extends (infer U)[]
  ? DeepReadonlyArray11802<U>
  : T extends object
  ? DeepReadonlyObject11802<T>
  : T;

interface DeepReadonlyArray11802<T> extends ReadonlyArray<DeepReadonly11802<T>> {}

type DeepReadonlyObject11802<T> = {
  readonly [P in keyof T]: DeepReadonly11802<T[P]>;
};

type UnionToIntersection11802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11802<T> = UnionToIntersection11802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11802<T extends unknown[], V> = [...T, V];

type TuplifyUnion11802<T, L = LastOf11802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11802<TuplifyUnion11802<Exclude<T, L>>, L>;

type DeepPartial11802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11802<T[P]> }
  : T;

type Paths11802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11802<K, Paths11802<T[K], Prev11802[D]>> : never }[keyof T]
  : never;

type Prev11802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11802 {
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

type ConfigPaths11802 = Paths11802<NestedConfig11802>;

interface HeavyProps11802 {
  config: DeepPartial11802<NestedConfig11802>;
  path?: ConfigPaths11802;
}

const HeavyComponent11802 = memo(function HeavyComponent11802({ config }: HeavyProps11802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11802.displayName = 'HeavyComponent11802';
export default HeavyComponent11802;
