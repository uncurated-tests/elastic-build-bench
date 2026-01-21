'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11693<T> = T extends (infer U)[]
  ? DeepReadonlyArray11693<U>
  : T extends object
  ? DeepReadonlyObject11693<T>
  : T;

interface DeepReadonlyArray11693<T> extends ReadonlyArray<DeepReadonly11693<T>> {}

type DeepReadonlyObject11693<T> = {
  readonly [P in keyof T]: DeepReadonly11693<T[P]>;
};

type UnionToIntersection11693<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11693<T> = UnionToIntersection11693<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11693<T extends unknown[], V> = [...T, V];

type TuplifyUnion11693<T, L = LastOf11693<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11693<TuplifyUnion11693<Exclude<T, L>>, L>;

type DeepPartial11693<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11693<T[P]> }
  : T;

type Paths11693<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11693<K, Paths11693<T[K], Prev11693[D]>> : never }[keyof T]
  : never;

type Prev11693 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11693<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11693 {
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

type ConfigPaths11693 = Paths11693<NestedConfig11693>;

interface HeavyProps11693 {
  config: DeepPartial11693<NestedConfig11693>;
  path?: ConfigPaths11693;
}

const HeavyComponent11693 = memo(function HeavyComponent11693({ config }: HeavyProps11693) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11693) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11693 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11693: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11693.displayName = 'HeavyComponent11693';
export default HeavyComponent11693;
