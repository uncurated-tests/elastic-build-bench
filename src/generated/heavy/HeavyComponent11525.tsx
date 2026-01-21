'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11525<T> = T extends (infer U)[]
  ? DeepReadonlyArray11525<U>
  : T extends object
  ? DeepReadonlyObject11525<T>
  : T;

interface DeepReadonlyArray11525<T> extends ReadonlyArray<DeepReadonly11525<T>> {}

type DeepReadonlyObject11525<T> = {
  readonly [P in keyof T]: DeepReadonly11525<T[P]>;
};

type UnionToIntersection11525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11525<T> = UnionToIntersection11525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11525<T extends unknown[], V> = [...T, V];

type TuplifyUnion11525<T, L = LastOf11525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11525<TuplifyUnion11525<Exclude<T, L>>, L>;

type DeepPartial11525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11525<T[P]> }
  : T;

type Paths11525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11525<K, Paths11525<T[K], Prev11525[D]>> : never }[keyof T]
  : never;

type Prev11525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11525 {
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

type ConfigPaths11525 = Paths11525<NestedConfig11525>;

interface HeavyProps11525 {
  config: DeepPartial11525<NestedConfig11525>;
  path?: ConfigPaths11525;
}

const HeavyComponent11525 = memo(function HeavyComponent11525({ config }: HeavyProps11525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11525.displayName = 'HeavyComponent11525';
export default HeavyComponent11525;
