'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11767<T> = T extends (infer U)[]
  ? DeepReadonlyArray11767<U>
  : T extends object
  ? DeepReadonlyObject11767<T>
  : T;

interface DeepReadonlyArray11767<T> extends ReadonlyArray<DeepReadonly11767<T>> {}

type DeepReadonlyObject11767<T> = {
  readonly [P in keyof T]: DeepReadonly11767<T[P]>;
};

type UnionToIntersection11767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11767<T> = UnionToIntersection11767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11767<T extends unknown[], V> = [...T, V];

type TuplifyUnion11767<T, L = LastOf11767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11767<TuplifyUnion11767<Exclude<T, L>>, L>;

type DeepPartial11767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11767<T[P]> }
  : T;

type Paths11767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11767<K, Paths11767<T[K], Prev11767[D]>> : never }[keyof T]
  : never;

type Prev11767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11767 {
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

type ConfigPaths11767 = Paths11767<NestedConfig11767>;

interface HeavyProps11767 {
  config: DeepPartial11767<NestedConfig11767>;
  path?: ConfigPaths11767;
}

const HeavyComponent11767 = memo(function HeavyComponent11767({ config }: HeavyProps11767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11767.displayName = 'HeavyComponent11767';
export default HeavyComponent11767;
