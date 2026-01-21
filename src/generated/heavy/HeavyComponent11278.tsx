'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11278<T> = T extends (infer U)[]
  ? DeepReadonlyArray11278<U>
  : T extends object
  ? DeepReadonlyObject11278<T>
  : T;

interface DeepReadonlyArray11278<T> extends ReadonlyArray<DeepReadonly11278<T>> {}

type DeepReadonlyObject11278<T> = {
  readonly [P in keyof T]: DeepReadonly11278<T[P]>;
};

type UnionToIntersection11278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11278<T> = UnionToIntersection11278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11278<T extends unknown[], V> = [...T, V];

type TuplifyUnion11278<T, L = LastOf11278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11278<TuplifyUnion11278<Exclude<T, L>>, L>;

type DeepPartial11278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11278<T[P]> }
  : T;

type Paths11278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11278<K, Paths11278<T[K], Prev11278[D]>> : never }[keyof T]
  : never;

type Prev11278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11278 {
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

type ConfigPaths11278 = Paths11278<NestedConfig11278>;

interface HeavyProps11278 {
  config: DeepPartial11278<NestedConfig11278>;
  path?: ConfigPaths11278;
}

const HeavyComponent11278 = memo(function HeavyComponent11278({ config }: HeavyProps11278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11278.displayName = 'HeavyComponent11278';
export default HeavyComponent11278;
