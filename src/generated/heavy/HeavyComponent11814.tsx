'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11814<T> = T extends (infer U)[]
  ? DeepReadonlyArray11814<U>
  : T extends object
  ? DeepReadonlyObject11814<T>
  : T;

interface DeepReadonlyArray11814<T> extends ReadonlyArray<DeepReadonly11814<T>> {}

type DeepReadonlyObject11814<T> = {
  readonly [P in keyof T]: DeepReadonly11814<T[P]>;
};

type UnionToIntersection11814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11814<T> = UnionToIntersection11814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11814<T extends unknown[], V> = [...T, V];

type TuplifyUnion11814<T, L = LastOf11814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11814<TuplifyUnion11814<Exclude<T, L>>, L>;

type DeepPartial11814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11814<T[P]> }
  : T;

type Paths11814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11814<K, Paths11814<T[K], Prev11814[D]>> : never }[keyof T]
  : never;

type Prev11814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11814 {
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

type ConfigPaths11814 = Paths11814<NestedConfig11814>;

interface HeavyProps11814 {
  config: DeepPartial11814<NestedConfig11814>;
  path?: ConfigPaths11814;
}

const HeavyComponent11814 = memo(function HeavyComponent11814({ config }: HeavyProps11814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11814.displayName = 'HeavyComponent11814';
export default HeavyComponent11814;
