'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14059<T> = T extends (infer U)[]
  ? DeepReadonlyArray14059<U>
  : T extends object
  ? DeepReadonlyObject14059<T>
  : T;

interface DeepReadonlyArray14059<T> extends ReadonlyArray<DeepReadonly14059<T>> {}

type DeepReadonlyObject14059<T> = {
  readonly [P in keyof T]: DeepReadonly14059<T[P]>;
};

type UnionToIntersection14059<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14059<T> = UnionToIntersection14059<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14059<T extends unknown[], V> = [...T, V];

type TuplifyUnion14059<T, L = LastOf14059<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14059<TuplifyUnion14059<Exclude<T, L>>, L>;

type DeepPartial14059<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14059<T[P]> }
  : T;

type Paths14059<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14059<K, Paths14059<T[K], Prev14059[D]>> : never }[keyof T]
  : never;

type Prev14059 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14059<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14059 {
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

type ConfigPaths14059 = Paths14059<NestedConfig14059>;

interface HeavyProps14059 {
  config: DeepPartial14059<NestedConfig14059>;
  path?: ConfigPaths14059;
}

const HeavyComponent14059 = memo(function HeavyComponent14059({ config }: HeavyProps14059) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14059) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14059 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14059: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14059.displayName = 'HeavyComponent14059';
export default HeavyComponent14059;
