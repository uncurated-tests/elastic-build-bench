'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14838<T> = T extends (infer U)[]
  ? DeepReadonlyArray14838<U>
  : T extends object
  ? DeepReadonlyObject14838<T>
  : T;

interface DeepReadonlyArray14838<T> extends ReadonlyArray<DeepReadonly14838<T>> {}

type DeepReadonlyObject14838<T> = {
  readonly [P in keyof T]: DeepReadonly14838<T[P]>;
};

type UnionToIntersection14838<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14838<T> = UnionToIntersection14838<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14838<T extends unknown[], V> = [...T, V];

type TuplifyUnion14838<T, L = LastOf14838<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14838<TuplifyUnion14838<Exclude<T, L>>, L>;

type DeepPartial14838<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14838<T[P]> }
  : T;

type Paths14838<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14838<K, Paths14838<T[K], Prev14838[D]>> : never }[keyof T]
  : never;

type Prev14838 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14838<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14838 {
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

type ConfigPaths14838 = Paths14838<NestedConfig14838>;

interface HeavyProps14838 {
  config: DeepPartial14838<NestedConfig14838>;
  path?: ConfigPaths14838;
}

const HeavyComponent14838 = memo(function HeavyComponent14838({ config }: HeavyProps14838) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14838) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14838 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14838: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14838.displayName = 'HeavyComponent14838';
export default HeavyComponent14838;
