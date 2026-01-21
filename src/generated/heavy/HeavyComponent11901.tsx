'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11901<T> = T extends (infer U)[]
  ? DeepReadonlyArray11901<U>
  : T extends object
  ? DeepReadonlyObject11901<T>
  : T;

interface DeepReadonlyArray11901<T> extends ReadonlyArray<DeepReadonly11901<T>> {}

type DeepReadonlyObject11901<T> = {
  readonly [P in keyof T]: DeepReadonly11901<T[P]>;
};

type UnionToIntersection11901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11901<T> = UnionToIntersection11901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11901<T extends unknown[], V> = [...T, V];

type TuplifyUnion11901<T, L = LastOf11901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11901<TuplifyUnion11901<Exclude<T, L>>, L>;

type DeepPartial11901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11901<T[P]> }
  : T;

type Paths11901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11901<K, Paths11901<T[K], Prev11901[D]>> : never }[keyof T]
  : never;

type Prev11901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11901 {
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

type ConfigPaths11901 = Paths11901<NestedConfig11901>;

interface HeavyProps11901 {
  config: DeepPartial11901<NestedConfig11901>;
  path?: ConfigPaths11901;
}

const HeavyComponent11901 = memo(function HeavyComponent11901({ config }: HeavyProps11901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11901.displayName = 'HeavyComponent11901';
export default HeavyComponent11901;
