'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11069<T> = T extends (infer U)[]
  ? DeepReadonlyArray11069<U>
  : T extends object
  ? DeepReadonlyObject11069<T>
  : T;

interface DeepReadonlyArray11069<T> extends ReadonlyArray<DeepReadonly11069<T>> {}

type DeepReadonlyObject11069<T> = {
  readonly [P in keyof T]: DeepReadonly11069<T[P]>;
};

type UnionToIntersection11069<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11069<T> = UnionToIntersection11069<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11069<T extends unknown[], V> = [...T, V];

type TuplifyUnion11069<T, L = LastOf11069<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11069<TuplifyUnion11069<Exclude<T, L>>, L>;

type DeepPartial11069<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11069<T[P]> }
  : T;

type Paths11069<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11069<K, Paths11069<T[K], Prev11069[D]>> : never }[keyof T]
  : never;

type Prev11069 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11069<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11069 {
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

type ConfigPaths11069 = Paths11069<NestedConfig11069>;

interface HeavyProps11069 {
  config: DeepPartial11069<NestedConfig11069>;
  path?: ConfigPaths11069;
}

const HeavyComponent11069 = memo(function HeavyComponent11069({ config }: HeavyProps11069) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11069) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11069 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11069: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11069.displayName = 'HeavyComponent11069';
export default HeavyComponent11069;
