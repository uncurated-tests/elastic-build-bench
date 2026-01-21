'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11743<T> = T extends (infer U)[]
  ? DeepReadonlyArray11743<U>
  : T extends object
  ? DeepReadonlyObject11743<T>
  : T;

interface DeepReadonlyArray11743<T> extends ReadonlyArray<DeepReadonly11743<T>> {}

type DeepReadonlyObject11743<T> = {
  readonly [P in keyof T]: DeepReadonly11743<T[P]>;
};

type UnionToIntersection11743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11743<T> = UnionToIntersection11743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11743<T extends unknown[], V> = [...T, V];

type TuplifyUnion11743<T, L = LastOf11743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11743<TuplifyUnion11743<Exclude<T, L>>, L>;

type DeepPartial11743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11743<T[P]> }
  : T;

type Paths11743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11743<K, Paths11743<T[K], Prev11743[D]>> : never }[keyof T]
  : never;

type Prev11743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11743 {
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

type ConfigPaths11743 = Paths11743<NestedConfig11743>;

interface HeavyProps11743 {
  config: DeepPartial11743<NestedConfig11743>;
  path?: ConfigPaths11743;
}

const HeavyComponent11743 = memo(function HeavyComponent11743({ config }: HeavyProps11743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11743.displayName = 'HeavyComponent11743';
export default HeavyComponent11743;
