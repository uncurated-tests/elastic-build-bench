'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11307<T> = T extends (infer U)[]
  ? DeepReadonlyArray11307<U>
  : T extends object
  ? DeepReadonlyObject11307<T>
  : T;

interface DeepReadonlyArray11307<T> extends ReadonlyArray<DeepReadonly11307<T>> {}

type DeepReadonlyObject11307<T> = {
  readonly [P in keyof T]: DeepReadonly11307<T[P]>;
};

type UnionToIntersection11307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11307<T> = UnionToIntersection11307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11307<T extends unknown[], V> = [...T, V];

type TuplifyUnion11307<T, L = LastOf11307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11307<TuplifyUnion11307<Exclude<T, L>>, L>;

type DeepPartial11307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11307<T[P]> }
  : T;

type Paths11307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11307<K, Paths11307<T[K], Prev11307[D]>> : never }[keyof T]
  : never;

type Prev11307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11307 {
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

type ConfigPaths11307 = Paths11307<NestedConfig11307>;

interface HeavyProps11307 {
  config: DeepPartial11307<NestedConfig11307>;
  path?: ConfigPaths11307;
}

const HeavyComponent11307 = memo(function HeavyComponent11307({ config }: HeavyProps11307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11307.displayName = 'HeavyComponent11307';
export default HeavyComponent11307;
