'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11479<T> = T extends (infer U)[]
  ? DeepReadonlyArray11479<U>
  : T extends object
  ? DeepReadonlyObject11479<T>
  : T;

interface DeepReadonlyArray11479<T> extends ReadonlyArray<DeepReadonly11479<T>> {}

type DeepReadonlyObject11479<T> = {
  readonly [P in keyof T]: DeepReadonly11479<T[P]>;
};

type UnionToIntersection11479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11479<T> = UnionToIntersection11479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11479<T extends unknown[], V> = [...T, V];

type TuplifyUnion11479<T, L = LastOf11479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11479<TuplifyUnion11479<Exclude<T, L>>, L>;

type DeepPartial11479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11479<T[P]> }
  : T;

type Paths11479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11479<K, Paths11479<T[K], Prev11479[D]>> : never }[keyof T]
  : never;

type Prev11479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11479 {
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

type ConfigPaths11479 = Paths11479<NestedConfig11479>;

interface HeavyProps11479 {
  config: DeepPartial11479<NestedConfig11479>;
  path?: ConfigPaths11479;
}

const HeavyComponent11479 = memo(function HeavyComponent11479({ config }: HeavyProps11479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11479.displayName = 'HeavyComponent11479';
export default HeavyComponent11479;
