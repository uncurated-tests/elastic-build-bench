'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11460<T> = T extends (infer U)[]
  ? DeepReadonlyArray11460<U>
  : T extends object
  ? DeepReadonlyObject11460<T>
  : T;

interface DeepReadonlyArray11460<T> extends ReadonlyArray<DeepReadonly11460<T>> {}

type DeepReadonlyObject11460<T> = {
  readonly [P in keyof T]: DeepReadonly11460<T[P]>;
};

type UnionToIntersection11460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11460<T> = UnionToIntersection11460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11460<T extends unknown[], V> = [...T, V];

type TuplifyUnion11460<T, L = LastOf11460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11460<TuplifyUnion11460<Exclude<T, L>>, L>;

type DeepPartial11460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11460<T[P]> }
  : T;

type Paths11460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11460<K, Paths11460<T[K], Prev11460[D]>> : never }[keyof T]
  : never;

type Prev11460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11460 {
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

type ConfigPaths11460 = Paths11460<NestedConfig11460>;

interface HeavyProps11460 {
  config: DeepPartial11460<NestedConfig11460>;
  path?: ConfigPaths11460;
}

const HeavyComponent11460 = memo(function HeavyComponent11460({ config }: HeavyProps11460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11460.displayName = 'HeavyComponent11460';
export default HeavyComponent11460;
