'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11771<T> = T extends (infer U)[]
  ? DeepReadonlyArray11771<U>
  : T extends object
  ? DeepReadonlyObject11771<T>
  : T;

interface DeepReadonlyArray11771<T> extends ReadonlyArray<DeepReadonly11771<T>> {}

type DeepReadonlyObject11771<T> = {
  readonly [P in keyof T]: DeepReadonly11771<T[P]>;
};

type UnionToIntersection11771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11771<T> = UnionToIntersection11771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11771<T extends unknown[], V> = [...T, V];

type TuplifyUnion11771<T, L = LastOf11771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11771<TuplifyUnion11771<Exclude<T, L>>, L>;

type DeepPartial11771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11771<T[P]> }
  : T;

type Paths11771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11771<K, Paths11771<T[K], Prev11771[D]>> : never }[keyof T]
  : never;

type Prev11771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11771 {
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

type ConfigPaths11771 = Paths11771<NestedConfig11771>;

interface HeavyProps11771 {
  config: DeepPartial11771<NestedConfig11771>;
  path?: ConfigPaths11771;
}

const HeavyComponent11771 = memo(function HeavyComponent11771({ config }: HeavyProps11771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11771.displayName = 'HeavyComponent11771';
export default HeavyComponent11771;
