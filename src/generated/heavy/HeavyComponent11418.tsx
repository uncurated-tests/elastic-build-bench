'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11418<T> = T extends (infer U)[]
  ? DeepReadonlyArray11418<U>
  : T extends object
  ? DeepReadonlyObject11418<T>
  : T;

interface DeepReadonlyArray11418<T> extends ReadonlyArray<DeepReadonly11418<T>> {}

type DeepReadonlyObject11418<T> = {
  readonly [P in keyof T]: DeepReadonly11418<T[P]>;
};

type UnionToIntersection11418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11418<T> = UnionToIntersection11418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11418<T extends unknown[], V> = [...T, V];

type TuplifyUnion11418<T, L = LastOf11418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11418<TuplifyUnion11418<Exclude<T, L>>, L>;

type DeepPartial11418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11418<T[P]> }
  : T;

type Paths11418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11418<K, Paths11418<T[K], Prev11418[D]>> : never }[keyof T]
  : never;

type Prev11418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11418 {
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

type ConfigPaths11418 = Paths11418<NestedConfig11418>;

interface HeavyProps11418 {
  config: DeepPartial11418<NestedConfig11418>;
  path?: ConfigPaths11418;
}

const HeavyComponent11418 = memo(function HeavyComponent11418({ config }: HeavyProps11418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11418.displayName = 'HeavyComponent11418';
export default HeavyComponent11418;
