'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11738<T> = T extends (infer U)[]
  ? DeepReadonlyArray11738<U>
  : T extends object
  ? DeepReadonlyObject11738<T>
  : T;

interface DeepReadonlyArray11738<T> extends ReadonlyArray<DeepReadonly11738<T>> {}

type DeepReadonlyObject11738<T> = {
  readonly [P in keyof T]: DeepReadonly11738<T[P]>;
};

type UnionToIntersection11738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11738<T> = UnionToIntersection11738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11738<T extends unknown[], V> = [...T, V];

type TuplifyUnion11738<T, L = LastOf11738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11738<TuplifyUnion11738<Exclude<T, L>>, L>;

type DeepPartial11738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11738<T[P]> }
  : T;

type Paths11738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11738<K, Paths11738<T[K], Prev11738[D]>> : never }[keyof T]
  : never;

type Prev11738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11738 {
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

type ConfigPaths11738 = Paths11738<NestedConfig11738>;

interface HeavyProps11738 {
  config: DeepPartial11738<NestedConfig11738>;
  path?: ConfigPaths11738;
}

const HeavyComponent11738 = memo(function HeavyComponent11738({ config }: HeavyProps11738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11738.displayName = 'HeavyComponent11738';
export default HeavyComponent11738;
