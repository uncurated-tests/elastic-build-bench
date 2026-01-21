'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11540<T> = T extends (infer U)[]
  ? DeepReadonlyArray11540<U>
  : T extends object
  ? DeepReadonlyObject11540<T>
  : T;

interface DeepReadonlyArray11540<T> extends ReadonlyArray<DeepReadonly11540<T>> {}

type DeepReadonlyObject11540<T> = {
  readonly [P in keyof T]: DeepReadonly11540<T[P]>;
};

type UnionToIntersection11540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11540<T> = UnionToIntersection11540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11540<T extends unknown[], V> = [...T, V];

type TuplifyUnion11540<T, L = LastOf11540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11540<TuplifyUnion11540<Exclude<T, L>>, L>;

type DeepPartial11540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11540<T[P]> }
  : T;

type Paths11540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11540<K, Paths11540<T[K], Prev11540[D]>> : never }[keyof T]
  : never;

type Prev11540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11540 {
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

type ConfigPaths11540 = Paths11540<NestedConfig11540>;

interface HeavyProps11540 {
  config: DeepPartial11540<NestedConfig11540>;
  path?: ConfigPaths11540;
}

const HeavyComponent11540 = memo(function HeavyComponent11540({ config }: HeavyProps11540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11540.displayName = 'HeavyComponent11540';
export default HeavyComponent11540;
