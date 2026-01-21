'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11234<T> = T extends (infer U)[]
  ? DeepReadonlyArray11234<U>
  : T extends object
  ? DeepReadonlyObject11234<T>
  : T;

interface DeepReadonlyArray11234<T> extends ReadonlyArray<DeepReadonly11234<T>> {}

type DeepReadonlyObject11234<T> = {
  readonly [P in keyof T]: DeepReadonly11234<T[P]>;
};

type UnionToIntersection11234<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11234<T> = UnionToIntersection11234<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11234<T extends unknown[], V> = [...T, V];

type TuplifyUnion11234<T, L = LastOf11234<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11234<TuplifyUnion11234<Exclude<T, L>>, L>;

type DeepPartial11234<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11234<T[P]> }
  : T;

type Paths11234<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11234<K, Paths11234<T[K], Prev11234[D]>> : never }[keyof T]
  : never;

type Prev11234 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11234<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11234 {
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

type ConfigPaths11234 = Paths11234<NestedConfig11234>;

interface HeavyProps11234 {
  config: DeepPartial11234<NestedConfig11234>;
  path?: ConfigPaths11234;
}

const HeavyComponent11234 = memo(function HeavyComponent11234({ config }: HeavyProps11234) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11234) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11234 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11234: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11234.displayName = 'HeavyComponent11234';
export default HeavyComponent11234;
